import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-screenshots-server-europe');
}

export default function RookgaardTalesWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-screenshots-server-europe" />;
}
