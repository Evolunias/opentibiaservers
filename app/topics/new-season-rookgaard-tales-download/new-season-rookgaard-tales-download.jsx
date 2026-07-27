import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-download');
}

export default function NewSeasonRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-download" />;
}
