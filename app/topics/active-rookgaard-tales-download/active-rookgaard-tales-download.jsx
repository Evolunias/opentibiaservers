import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-download');
}

export default function ActiveRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-download" />;
}
