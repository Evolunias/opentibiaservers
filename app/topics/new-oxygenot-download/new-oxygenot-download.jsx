import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-download');
}

export default function NewOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-download" />;
}
