import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-download');
}

export default function CustomAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-download" />;
}
