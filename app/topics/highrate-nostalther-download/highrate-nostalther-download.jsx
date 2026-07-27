import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-download');
}

export default function HighrateNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-download" />;
}
