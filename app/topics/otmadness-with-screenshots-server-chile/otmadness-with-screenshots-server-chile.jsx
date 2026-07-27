import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-screenshots-server-chile');
}

export default function OtmadnessWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-screenshots-server-chile" />;
}
