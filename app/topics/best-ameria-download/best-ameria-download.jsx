import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-download');
}

export default function BestAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-download" />;
}
