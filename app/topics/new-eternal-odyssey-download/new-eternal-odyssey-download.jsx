import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-download');
}

export default function NewEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-download" />;
}
