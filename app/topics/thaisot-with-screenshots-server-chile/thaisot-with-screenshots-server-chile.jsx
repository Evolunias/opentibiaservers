import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-screenshots-server-chile');
}

export default function ThaisotWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-screenshots-server-chile" />;
}
