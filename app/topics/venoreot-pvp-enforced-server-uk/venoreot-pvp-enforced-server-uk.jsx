import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-uk');
}

export default function VenoreotPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-uk" />;
}
