import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-wiki-chile');
}

export default function PvpeWikiChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-wiki-chile" />;
}
