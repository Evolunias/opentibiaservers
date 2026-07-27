import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-download');
}

export default function FreshStartDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-download" />;
}
