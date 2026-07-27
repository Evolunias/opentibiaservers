import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-with-screenshots-server');
}

export default function Tibiaretro15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-with-screenshots-server" />;
}
