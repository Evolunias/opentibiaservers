import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-screenshots-server-chile');
}

export default function ElderaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-screenshots-server-chile" />;
}
