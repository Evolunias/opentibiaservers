import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-download');
}

export default function PopularDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-download" />;
}
