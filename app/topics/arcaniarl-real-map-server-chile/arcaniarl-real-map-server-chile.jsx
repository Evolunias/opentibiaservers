import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-server-chile');
}

export default function ArcaniarlRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-server-chile" />;
}
