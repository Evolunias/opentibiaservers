import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-download');
}

export default function OfficialOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-download" />;
}
