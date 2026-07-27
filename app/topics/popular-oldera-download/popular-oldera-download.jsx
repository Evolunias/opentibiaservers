import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-download');
}

export default function PopularOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-download" />;
}
