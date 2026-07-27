import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-chile');
}

export default function ClassicusWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-chile" />;
}
