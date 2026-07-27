import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-france');
}

export default function TibiaretroWithScreenshotsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-france" />;
}
