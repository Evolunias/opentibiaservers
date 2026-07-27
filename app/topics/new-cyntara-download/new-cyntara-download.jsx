import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-download');
}

export default function NewCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-download" />;
}
