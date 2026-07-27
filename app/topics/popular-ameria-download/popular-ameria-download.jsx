import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-download');
}

export default function PopularAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-download" />;
}
