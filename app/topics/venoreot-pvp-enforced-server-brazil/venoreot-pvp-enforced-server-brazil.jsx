import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-brazil');
}

export default function VenoreotPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-brazil" />;
}
