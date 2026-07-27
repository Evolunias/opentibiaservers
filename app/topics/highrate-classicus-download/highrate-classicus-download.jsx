import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-download');
}

export default function HighrateClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-download" />;
}
