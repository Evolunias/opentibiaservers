import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-france');
}

export default function VenoreotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-france" />;
}
