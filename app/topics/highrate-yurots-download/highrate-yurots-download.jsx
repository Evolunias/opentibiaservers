import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-download');
}

export default function HighrateYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-download" />;
}
