import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-usa');
}

export default function CoxaotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-usa" />;
}
