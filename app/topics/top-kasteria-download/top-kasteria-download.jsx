import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-download');
}

export default function TopKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-download" />;
}
