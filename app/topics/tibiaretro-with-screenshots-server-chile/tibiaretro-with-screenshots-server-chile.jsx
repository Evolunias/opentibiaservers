import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-chile');
}

export default function TibiaretroWithScreenshotsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-chile" />;
}
