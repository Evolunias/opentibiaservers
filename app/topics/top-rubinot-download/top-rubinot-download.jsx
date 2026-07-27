import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-download');
}

export default function TopRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-download" />;
}
