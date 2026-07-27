import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-guide-chile');
}

export default function RetroGuideChileKeywordPage() {
  return <StaticKeywordPage slug="retro-guide-chile" />;
}
