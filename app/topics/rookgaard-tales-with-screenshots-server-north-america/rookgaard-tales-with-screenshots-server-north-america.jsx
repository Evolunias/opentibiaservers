import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-with-screenshots-server-north-america');
}

export default function RookgaardTalesWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-with-screenshots-server-north-america" />;
}
