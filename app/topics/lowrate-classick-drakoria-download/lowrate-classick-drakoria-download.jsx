import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-download');
}

export default function LowrateClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-download" />;
}
