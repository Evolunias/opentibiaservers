import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-download');
}

export default function BestOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-download" />;
}
