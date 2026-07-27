import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-download');
}

export default function BestOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-download" />;
}
