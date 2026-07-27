import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-download');
}

export default function FreshStartOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-download" />;
}
