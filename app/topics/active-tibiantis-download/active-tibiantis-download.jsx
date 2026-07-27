import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-download');
}

export default function ActiveTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-download" />;
}
