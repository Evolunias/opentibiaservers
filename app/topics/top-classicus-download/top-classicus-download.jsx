import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-download');
}

export default function TopClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-download" />;
}
