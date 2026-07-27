import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-download');
}

export default function NewSeasonRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-download" />;
}
