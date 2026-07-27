import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-with-screenshots-server');
}

export default function Tibiaretro74WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-with-screenshots-server" />;
}
