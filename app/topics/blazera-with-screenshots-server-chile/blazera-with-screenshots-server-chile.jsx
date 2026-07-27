import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-screenshots-server-chile');
}

export default function BlazeraWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-screenshots-server-chile" />;
}
