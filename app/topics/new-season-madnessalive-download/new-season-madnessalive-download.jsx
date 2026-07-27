import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-download');
}

export default function NewSeasonMadnessaliveDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-download" />;
}
