import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-download');
}

export default function LowrateCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-download" />;
}
