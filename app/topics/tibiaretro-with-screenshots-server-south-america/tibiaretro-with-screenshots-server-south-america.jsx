import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-south-america');
}

export default function TibiaretroWithScreenshotsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-south-america" />;
}
