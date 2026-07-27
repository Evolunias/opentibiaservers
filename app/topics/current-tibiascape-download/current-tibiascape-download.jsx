import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-download');
}

export default function CurrentTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-download" />;
}
