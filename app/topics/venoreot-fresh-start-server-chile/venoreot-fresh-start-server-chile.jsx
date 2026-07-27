import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-chile');
}

export default function VenoreotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-chile" />;
}
