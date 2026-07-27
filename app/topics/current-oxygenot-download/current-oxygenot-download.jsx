import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-download');
}

export default function CurrentOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-download" />;
}
