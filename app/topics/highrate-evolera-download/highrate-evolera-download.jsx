import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-download');
}

export default function HighrateEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-download" />;
}
