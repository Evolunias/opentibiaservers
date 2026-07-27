import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-download');
}

export default function PopularRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-download" />;
}
