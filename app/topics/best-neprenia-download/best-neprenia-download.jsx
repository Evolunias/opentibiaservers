import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-download');
}

export default function BestNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-download" />;
}
