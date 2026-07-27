import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-download');
}

export default function HighrateTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-download" />;
}
