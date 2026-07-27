import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-screenshots-server-chile');
}

export default function NilotWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-screenshots-server-chile" />;
}
