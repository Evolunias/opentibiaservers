import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-france');
}

export default function VenoreotPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-france" />;
}
