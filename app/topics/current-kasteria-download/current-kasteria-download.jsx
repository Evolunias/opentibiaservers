import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-download');
}

export default function CurrentKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-download" />;
}
