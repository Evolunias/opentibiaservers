import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-download');
}

export default function CurrentEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-download" />;
}
