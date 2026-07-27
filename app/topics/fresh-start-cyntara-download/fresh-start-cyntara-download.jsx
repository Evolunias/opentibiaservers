import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-download');
}

export default function FreshStartCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-download" />;
}
