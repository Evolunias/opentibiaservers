import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-screenshots-server-chile');
}

export default function NepreniaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-screenshots-server-chile" />;
}
