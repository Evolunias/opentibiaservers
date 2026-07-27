import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-download');
}

export default function TopAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-download" />;
}
