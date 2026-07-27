import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-poland');
}

export default function CarlinotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-poland" />;
}
