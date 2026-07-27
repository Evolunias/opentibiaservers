import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-download');
}

export default function BestTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-download" />;
}
