import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-download');
}

export default function CustomRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-download" />;
}
