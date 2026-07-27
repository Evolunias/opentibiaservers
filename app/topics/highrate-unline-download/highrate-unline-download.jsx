import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-download');
}

export default function HighrateUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-download" />;
}
