import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-download');
}

export default function HighrateRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-download" />;
}
