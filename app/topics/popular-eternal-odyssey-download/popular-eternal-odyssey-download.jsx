import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-download');
}

export default function PopularEternalOdysseyDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-download" />;
}
