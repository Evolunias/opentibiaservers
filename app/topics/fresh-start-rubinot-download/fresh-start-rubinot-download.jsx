import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-download');
}

export default function FreshStartRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-download" />;
}
