import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-download');
}

export default function HighrateTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-download" />;
}
