import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-download');
}

export default function PopularMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-download" />;
}
