import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-download');
}

export default function FreshStartMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-download" />;
}
