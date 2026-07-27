import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-download');
}

export default function LowrateTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-download" />;
}
