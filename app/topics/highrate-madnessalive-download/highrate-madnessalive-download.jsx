import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-download');
}

export default function HighrateMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-download" />;
}
