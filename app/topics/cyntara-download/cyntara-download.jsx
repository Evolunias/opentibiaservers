import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-download');
}

export default function CyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="cyntara-download" />;
}
