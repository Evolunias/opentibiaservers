import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-chile');
}

export default function RetroWikiChileKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-chile" />;
}
