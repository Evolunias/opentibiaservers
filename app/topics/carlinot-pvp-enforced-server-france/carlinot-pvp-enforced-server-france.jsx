import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-france');
}

export default function CarlinotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-france" />;
}
