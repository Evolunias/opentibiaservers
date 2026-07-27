import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-latin-america');
}

export default function TibiaretroWithScreenshotsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-latin-america" />;
}
