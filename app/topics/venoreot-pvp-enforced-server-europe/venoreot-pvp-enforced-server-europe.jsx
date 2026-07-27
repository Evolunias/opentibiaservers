import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-europe');
}

export default function VenoreotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-europe" />;
}
