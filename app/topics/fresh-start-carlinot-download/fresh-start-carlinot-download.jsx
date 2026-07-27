import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-download');
}

export default function FreshStartCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-download" />;
}
