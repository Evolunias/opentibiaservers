import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-download');
}

export default function PopularNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-download" />;
}
