import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-download');
}

export default function CustomCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-download" />;
}
