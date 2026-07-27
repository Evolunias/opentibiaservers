import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-chile');
}

export default function RealMapWikiChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-chile" />;
}
