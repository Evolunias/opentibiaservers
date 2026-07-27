import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-with-screenshots-server');
}

export default function Tibiaretro11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-with-screenshots-server" />;
}
