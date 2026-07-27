import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-download');
}

export default function TopOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-download" />;
}
