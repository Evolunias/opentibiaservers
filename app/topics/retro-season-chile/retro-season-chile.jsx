import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-season-chile');
}

export default function RetroSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="retro-season-chile" />;
}
