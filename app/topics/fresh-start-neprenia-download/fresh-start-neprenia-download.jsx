import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-download');
}

export default function FreshStartNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-download" />;
}
