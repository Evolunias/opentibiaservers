import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-with-screenshots-server');
}

export default function Tibiaretro76WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-with-screenshots-server" />;
}
