import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-download');
}

export default function TopNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-download" />;
}
