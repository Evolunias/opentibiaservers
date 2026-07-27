import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-download');
}

export default function ActiveAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-download" />;
}
