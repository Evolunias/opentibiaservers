import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-download');
}

export default function ActiveOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-download" />;
}
