import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-north-america');
}

export default function CarlinotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-north-america" />;
}
