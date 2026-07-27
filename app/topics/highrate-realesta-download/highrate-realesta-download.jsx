import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-download');
}

export default function HighrateRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-download" />;
}
