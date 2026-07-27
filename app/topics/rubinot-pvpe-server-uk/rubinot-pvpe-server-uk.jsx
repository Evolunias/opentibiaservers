import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-uk');
}

export default function RubinotPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-uk" />;
}
