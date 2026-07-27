import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-wiki-chile');
}

export default function BaiakWikiChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-wiki-chile" />;
}
