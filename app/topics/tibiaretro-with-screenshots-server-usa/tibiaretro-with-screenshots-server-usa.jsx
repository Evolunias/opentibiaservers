import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-usa');
}

export default function TibiaretroWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-usa" />;
}
