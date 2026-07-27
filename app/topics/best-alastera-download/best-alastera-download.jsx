import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-download');
}

export default function BestAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-download" />;
}
