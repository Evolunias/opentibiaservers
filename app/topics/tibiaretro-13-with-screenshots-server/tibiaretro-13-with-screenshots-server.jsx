import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-with-screenshots-server');
}

export default function Tibiaretro13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-with-screenshots-server" />;
}
