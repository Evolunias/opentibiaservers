import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-download');
}

export default function ActiveCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-download" />;
}
