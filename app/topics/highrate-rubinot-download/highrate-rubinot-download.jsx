import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-download');
}

export default function HighrateRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-download" />;
}
