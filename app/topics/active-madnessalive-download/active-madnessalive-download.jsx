import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-download');
}

export default function ActiveMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-download" />;
}
