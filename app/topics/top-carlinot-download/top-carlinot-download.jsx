import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-download');
}

export default function TopCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-download" />;
}
