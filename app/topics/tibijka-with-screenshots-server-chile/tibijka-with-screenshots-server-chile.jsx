import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-screenshots-server-chile');
}

export default function TibijkaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-screenshots-server-chile" />;
}
