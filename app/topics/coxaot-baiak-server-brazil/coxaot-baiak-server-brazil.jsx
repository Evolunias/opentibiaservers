import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-brazil');
}

export default function CoxaotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-brazil" />;
}
