import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-download');
}

export default function CurrentTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-download" />;
}
