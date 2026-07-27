import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-download');
}

export default function PopularTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-download" />;
}
