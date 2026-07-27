import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvpe-server-france');
}

export default function VenoreotPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvpe-server-france" />;
}
