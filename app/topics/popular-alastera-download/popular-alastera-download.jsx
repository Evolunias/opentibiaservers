import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-download');
}

export default function PopularAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-download" />;
}
