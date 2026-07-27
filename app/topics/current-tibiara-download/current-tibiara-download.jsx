import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-download');
}

export default function CurrentTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-download" />;
}
