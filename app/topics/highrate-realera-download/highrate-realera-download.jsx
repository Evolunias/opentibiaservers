import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-download');
}

export default function HighrateRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-download" />;
}
