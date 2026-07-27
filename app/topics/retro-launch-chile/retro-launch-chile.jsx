import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-launch-chile');
}

export default function RetroLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="retro-launch-chile" />;
}
