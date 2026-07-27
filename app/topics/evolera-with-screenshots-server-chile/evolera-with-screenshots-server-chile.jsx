import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-screenshots-server-chile');
}

export default function EvoleraWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-screenshots-server-chile" />;
}
