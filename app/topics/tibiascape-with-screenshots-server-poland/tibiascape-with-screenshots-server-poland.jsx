import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-screenshots-server-poland');
}

export default function TibiascapeWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-screenshots-server-poland" />;
}
