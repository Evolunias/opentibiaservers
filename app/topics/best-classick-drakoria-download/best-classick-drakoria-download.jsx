import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-download');
}

export default function BestClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-download" />;
}
