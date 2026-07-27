import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-download');
}

export default function PopularRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-download" />;
}
