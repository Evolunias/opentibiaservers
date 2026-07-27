import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-download');
}

export default function TopMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-download" />;
}
