import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-north-america');
}

export default function TibiaretroWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-north-america" />;
}
