import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-download');
}

export default function CurrentDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-download" />;
}
