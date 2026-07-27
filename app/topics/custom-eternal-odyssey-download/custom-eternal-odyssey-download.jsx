import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-download');
}

export default function CustomEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-download" />;
}
