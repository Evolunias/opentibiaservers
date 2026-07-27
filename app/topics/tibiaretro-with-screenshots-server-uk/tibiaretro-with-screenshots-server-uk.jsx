import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-uk');
}

export default function TibiaretroWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-uk" />;
}
