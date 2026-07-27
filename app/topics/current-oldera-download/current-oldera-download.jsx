import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-download');
}

export default function CurrentOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-download" />;
}
