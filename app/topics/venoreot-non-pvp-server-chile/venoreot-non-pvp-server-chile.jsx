import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-non-pvp-server-chile');
}

export default function VenoreotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-non-pvp-server-chile" />;
}
