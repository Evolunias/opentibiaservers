import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-screenshots-server-chile');
}

export default function CanobWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-with-screenshots-server-chile" />;
}
