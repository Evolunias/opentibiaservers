import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-screenshots-server-chile');
}

export default function KasteriaWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-screenshots-server-chile" />;
}
