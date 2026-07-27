import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-north-america');
}

export default function VenoreotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-north-america" />;
}
