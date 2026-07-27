import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-with-screenshots-server');
}

export default function Tibiaretro14WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-with-screenshots-server" />;
}
