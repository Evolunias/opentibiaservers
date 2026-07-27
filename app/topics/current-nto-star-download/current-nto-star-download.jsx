import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-download');
}

export default function CurrentNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-download" />;
}
