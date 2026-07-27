import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-europe');
}

export default function RubinotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-europe" />;
}
