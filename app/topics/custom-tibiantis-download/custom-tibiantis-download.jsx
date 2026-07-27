import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-download');
}

export default function CustomTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-download" />;
}
