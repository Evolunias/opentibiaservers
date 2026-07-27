import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-download');
}

export default function LowrateCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-download" />;
}
