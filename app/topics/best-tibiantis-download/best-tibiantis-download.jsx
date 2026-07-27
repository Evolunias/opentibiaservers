import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-download');
}

export default function BestTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-download" />;
}
