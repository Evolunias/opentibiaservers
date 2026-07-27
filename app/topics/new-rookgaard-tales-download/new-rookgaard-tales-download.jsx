import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-download');
}

export default function NewRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-download" />;
}
