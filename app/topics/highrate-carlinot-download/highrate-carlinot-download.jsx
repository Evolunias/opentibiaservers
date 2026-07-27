import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-download');
}

export default function HighrateCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-download" />;
}
