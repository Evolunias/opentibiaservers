import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-download');
}

export default function PopularKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-download" />;
}
