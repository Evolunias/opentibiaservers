import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-download');
}

export default function RookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-download" />;
}
