import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-download');
}

export default function CustomMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-download" />;
}
