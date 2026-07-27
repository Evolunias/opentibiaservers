import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-download');
}

export default function CurrentNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-download" />;
}
