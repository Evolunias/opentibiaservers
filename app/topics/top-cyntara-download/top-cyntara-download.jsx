import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-download');
}

export default function TopCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-download" />;
}
