import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-download');
}

export default function CurrentClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-download" />;
}
