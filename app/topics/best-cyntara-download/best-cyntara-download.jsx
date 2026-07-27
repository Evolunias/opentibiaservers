import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-download');
}

export default function BestCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-download" />;
}
