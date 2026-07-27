import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-download');
}

export default function TopOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-download" />;
}
