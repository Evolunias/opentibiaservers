import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-custom-map-servers-chile');
}

export default function ArcaniarlCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-custom-map-servers-chile" />;
}
