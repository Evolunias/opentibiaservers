import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-download');
}

export default function TopRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-download" />;
}
