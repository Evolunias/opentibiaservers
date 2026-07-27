import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-screenshots-server-chile');
}

export default function LumineraWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-screenshots-server-chile" />;
}
