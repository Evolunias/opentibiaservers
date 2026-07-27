import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-download');
}

export default function FreshStartKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-download" />;
}
