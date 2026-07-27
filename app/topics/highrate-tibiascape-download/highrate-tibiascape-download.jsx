import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiascape-download');
}

export default function HighrateTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiascape-download" />;
}
