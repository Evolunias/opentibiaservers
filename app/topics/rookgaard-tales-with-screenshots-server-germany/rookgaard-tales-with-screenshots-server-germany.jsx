import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-screenshots-server-germany');
}

export default function RookgaardTalesWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-screenshots-server-germany" />;
}
