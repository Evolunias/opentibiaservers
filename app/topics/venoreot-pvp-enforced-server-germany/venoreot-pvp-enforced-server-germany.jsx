import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-germany');
}

export default function VenoreotPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-germany" />;
}
