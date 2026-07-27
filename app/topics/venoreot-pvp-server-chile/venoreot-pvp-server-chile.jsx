import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-server-chile');
}

export default function VenoreotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-server-chile" />;
}
