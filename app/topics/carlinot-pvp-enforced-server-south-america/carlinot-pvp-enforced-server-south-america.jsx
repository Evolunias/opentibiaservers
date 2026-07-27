import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-south-america');
}

export default function CarlinotPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-south-america" />;
}
