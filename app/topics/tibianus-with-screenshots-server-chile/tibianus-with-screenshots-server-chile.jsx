import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-screenshots-server-chile');
}

export default function TibianusWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-screenshots-server-chile" />;
}
