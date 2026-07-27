import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-screenshots-server-chile');
}

export default function RealeraWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-with-screenshots-server-chile" />;
}
