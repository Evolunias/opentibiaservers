import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-sweden');
}

export default function TibiaretroWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-sweden" />;
}
