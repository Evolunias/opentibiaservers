import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-download');
}

export default function ActiveOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-download" />;
}
