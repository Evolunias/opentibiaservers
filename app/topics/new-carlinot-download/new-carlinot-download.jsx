import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-download');
}

export default function NewCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-download" />;
}
