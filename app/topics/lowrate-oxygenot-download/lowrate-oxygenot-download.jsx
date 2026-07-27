import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-download');
}

export default function LowrateOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-download" />;
}
