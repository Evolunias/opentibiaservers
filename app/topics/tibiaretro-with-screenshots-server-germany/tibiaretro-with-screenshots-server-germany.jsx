import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-germany');
}

export default function TibiaretroWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-germany" />;
}
