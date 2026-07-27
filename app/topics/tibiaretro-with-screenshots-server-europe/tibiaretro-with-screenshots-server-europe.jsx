import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-europe');
}

export default function TibiaretroWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-europe" />;
}
