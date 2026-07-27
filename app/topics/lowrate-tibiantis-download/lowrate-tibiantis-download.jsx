import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-download');
}

export default function LowrateTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-download" />;
}
