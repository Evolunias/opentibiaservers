import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-screenshots-server-poland');
}

export default function RookgaardTalesWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-screenshots-server-poland" />;
}
