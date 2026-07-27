import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-download');
}

export default function NewOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-download" />;
}
