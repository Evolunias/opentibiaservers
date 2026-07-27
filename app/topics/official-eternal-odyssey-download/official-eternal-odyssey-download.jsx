import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-download');
}

export default function OfficialEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-download" />;
}
