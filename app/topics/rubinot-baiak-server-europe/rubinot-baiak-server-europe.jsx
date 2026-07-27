import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-europe');
}

export default function RubinotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-europe" />;
}
