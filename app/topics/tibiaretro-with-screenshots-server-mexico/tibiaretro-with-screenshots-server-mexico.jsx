import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-mexico');
}

export default function TibiaretroWithScreenshotsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-mexico" />;
}
