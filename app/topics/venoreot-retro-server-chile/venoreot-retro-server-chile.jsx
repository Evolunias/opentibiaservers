import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-chile');
}

export default function VenoreotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-chile" />;
}
