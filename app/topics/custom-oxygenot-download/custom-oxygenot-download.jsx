import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-download');
}

export default function CustomOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-download" />;
}
