import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-download');
}

export default function TopTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-download" />;
}
