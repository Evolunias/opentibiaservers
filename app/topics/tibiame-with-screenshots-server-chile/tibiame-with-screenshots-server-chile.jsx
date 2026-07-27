import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-screenshots-server-chile');
}

export default function TibiameWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-screenshots-server-chile" />;
}
