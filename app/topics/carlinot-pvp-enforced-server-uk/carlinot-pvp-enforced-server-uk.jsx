import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-uk');
}

export default function CarlinotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-uk" />;
}
