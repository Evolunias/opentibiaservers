import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-uk');
}

export default function CoxaotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-uk" />;
}
