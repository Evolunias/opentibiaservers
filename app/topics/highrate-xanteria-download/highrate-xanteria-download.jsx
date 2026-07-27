import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-download');
}

export default function HighrateXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-download" />;
}
