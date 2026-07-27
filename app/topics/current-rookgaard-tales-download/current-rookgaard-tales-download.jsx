import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-download');
}

export default function CurrentRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-download" />;
}
