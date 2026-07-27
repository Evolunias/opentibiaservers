import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-download');
}

export default function TopClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-download" />;
}
