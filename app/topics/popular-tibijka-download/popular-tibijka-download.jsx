import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-download');
}

export default function PopularTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-download" />;
}
