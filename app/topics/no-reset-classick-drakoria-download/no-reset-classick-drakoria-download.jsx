import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-download');
}

export default function NoResetClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-download" />;
}
