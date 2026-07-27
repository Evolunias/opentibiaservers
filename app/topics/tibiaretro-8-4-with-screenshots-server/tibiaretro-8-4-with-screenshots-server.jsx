import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-with-screenshots-server');
}

export default function Tibiaretro84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-with-screenshots-server" />;
}
