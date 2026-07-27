import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-download');
}

export default function BestDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-download" />;
}
