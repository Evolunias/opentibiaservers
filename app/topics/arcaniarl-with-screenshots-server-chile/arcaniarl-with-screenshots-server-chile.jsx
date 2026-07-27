import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-screenshots-server-chile');
}

export default function ArcaniarlWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-screenshots-server-chile" />;
}
