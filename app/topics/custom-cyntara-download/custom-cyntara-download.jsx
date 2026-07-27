import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-download');
}

export default function CustomCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-download" />;
}
