import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-download');
}

export default function FreshStartAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-download" />;
}
