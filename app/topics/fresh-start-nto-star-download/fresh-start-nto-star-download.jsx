import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-download');
}

export default function FreshStartNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-download" />;
}
