import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-download');
}

export default function CurrentMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-download" />;
}
