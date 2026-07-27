import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-download');
}

export default function FreshStartAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-download" />;
}
