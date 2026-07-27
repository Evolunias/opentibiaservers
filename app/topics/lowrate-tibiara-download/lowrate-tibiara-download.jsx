import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-download');
}

export default function LowrateTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-download" />;
}
