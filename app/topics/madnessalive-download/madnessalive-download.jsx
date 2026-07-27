import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-download');
}

export default function MadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-download" />;
}
