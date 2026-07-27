import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-download');
}

export default function PopularTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-download" />;
}
