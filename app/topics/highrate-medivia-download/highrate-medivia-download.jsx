import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-download');
}

export default function HighrateMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-download" />;
}
