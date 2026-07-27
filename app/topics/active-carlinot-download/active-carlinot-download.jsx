import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-download');
}

export default function ActiveCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-download" />;
}
