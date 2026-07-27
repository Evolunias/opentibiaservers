import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-screenshots-server-chile');
}

export default function RealestaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-screenshots-server-chile" />;
}
