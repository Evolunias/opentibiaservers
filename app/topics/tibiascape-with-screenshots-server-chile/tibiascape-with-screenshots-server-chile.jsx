import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-chile');
}

export default function TibiascapeWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-chile" />;
}
