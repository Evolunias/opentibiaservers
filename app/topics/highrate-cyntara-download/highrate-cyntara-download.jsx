import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-download');
}

export default function HighrateCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-download" />;
}
