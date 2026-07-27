import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-download');
}

export default function HighrateOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-download" />;
}
