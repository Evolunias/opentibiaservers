import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-download');
}

export default function OfficialCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-download" />;
}
