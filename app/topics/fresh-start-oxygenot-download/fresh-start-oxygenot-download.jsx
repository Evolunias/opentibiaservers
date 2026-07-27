import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-download');
}

export default function FreshStartOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-download" />;
}
