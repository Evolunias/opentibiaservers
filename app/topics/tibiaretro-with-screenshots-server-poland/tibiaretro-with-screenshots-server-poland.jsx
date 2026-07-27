import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-screenshots-server-poland');
}

export default function TibiaretroWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-screenshots-server-poland" />;
}
