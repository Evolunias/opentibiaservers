import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-screenshots');
}

export default function RookgaardTalesScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-screenshots" />;
}
