import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-download');
}

export default function LowrateMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-download" />;
}
