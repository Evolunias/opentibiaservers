import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-screenshots-server-chile');
}

export default function ThorniaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-screenshots-server-chile" />;
}
