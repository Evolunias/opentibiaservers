import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-download');
}

export default function TopTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-download" />;
}
