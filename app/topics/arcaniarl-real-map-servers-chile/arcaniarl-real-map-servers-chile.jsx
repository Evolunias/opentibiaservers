import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-real-map-servers-chile');
}

export default function ArcaniarlRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-real-map-servers-chile" />;
}
