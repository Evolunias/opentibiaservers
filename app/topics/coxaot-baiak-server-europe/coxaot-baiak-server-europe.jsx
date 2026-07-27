import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-baiak-server-europe');
}

export default function CoxaotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-baiak-server-europe" />;
}
