import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-poland');
}

export default function VenoreotPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-poland" />;
}
