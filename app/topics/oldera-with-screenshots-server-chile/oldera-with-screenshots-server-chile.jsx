import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-screenshots-server-chile');
}

export default function OlderaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-screenshots-server-chile" />;
}
