import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-download');
}

export default function OlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="oldera-download" />;
}
