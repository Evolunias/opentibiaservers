import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-screenshots-server-chile');
}

export default function MediviaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-screenshots-server-chile" />;
}
