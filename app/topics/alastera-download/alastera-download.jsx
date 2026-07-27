import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-download');
}

export default function AlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="alastera-download" />;
}
