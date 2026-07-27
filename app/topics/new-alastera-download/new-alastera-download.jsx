import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-download');
}

export default function NewAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-download" />;
}
