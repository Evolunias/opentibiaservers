import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-screenshots-server-chile');
}

export default function MidhemWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-screenshots-server-chile" />;
}
