import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-download');
}

export default function OfficialMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-download" />;
}
