import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-mexico');
}

export default function CoxaotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-mexico" />;
}
