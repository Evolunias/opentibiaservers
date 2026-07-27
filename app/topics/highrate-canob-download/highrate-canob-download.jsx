import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-download');
}

export default function HighrateCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-download" />;
}
