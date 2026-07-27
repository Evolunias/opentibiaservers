import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-mexico');
}

export default function RubinotPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-mexico" />;
}
