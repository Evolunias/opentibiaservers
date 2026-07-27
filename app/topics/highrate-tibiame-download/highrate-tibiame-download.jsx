import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-download');
}

export default function HighrateTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-download" />;
}
