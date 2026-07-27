import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-download');
}

export default function HighrateImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-download" />;
}
