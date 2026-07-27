import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-download');
}

export default function CurrentAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-download" />;
}
