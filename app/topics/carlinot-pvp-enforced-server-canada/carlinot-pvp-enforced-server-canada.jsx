import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-canada');
}

export default function CarlinotPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-canada" />;
}
