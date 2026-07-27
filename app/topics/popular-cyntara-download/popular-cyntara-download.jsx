import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-download');
}

export default function PopularCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-download" />;
}
