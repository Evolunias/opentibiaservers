import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-download');
}

export default function NoResetMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-download" />;
}
