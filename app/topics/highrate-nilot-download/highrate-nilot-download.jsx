import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-download');
}

export default function HighrateNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-download" />;
}
