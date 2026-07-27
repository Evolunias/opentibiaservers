import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-download');
}

export default function NoResetCyntaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-download" />;
}
