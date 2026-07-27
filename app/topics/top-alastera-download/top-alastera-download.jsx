import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-download');
}

export default function TopAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-download" />;
}
