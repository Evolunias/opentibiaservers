import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-download');
}

export default function ActiveEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-download" />;
}
