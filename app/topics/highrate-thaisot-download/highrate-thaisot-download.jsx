import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-download');
}

export default function HighrateThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-download" />;
}
