import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-france');
}

export default function RubinotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-france" />;
}
