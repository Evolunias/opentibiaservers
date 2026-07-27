import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-download');
}

export default function BestKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-download" />;
}
