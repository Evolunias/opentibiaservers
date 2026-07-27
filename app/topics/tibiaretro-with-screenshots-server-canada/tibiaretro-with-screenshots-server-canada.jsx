import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-canada');
}

export default function TibiaretroWithScreenshotsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-canada" />;
}
