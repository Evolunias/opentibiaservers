import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-france');
}

export default function VenoreotNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-france" />;
}
