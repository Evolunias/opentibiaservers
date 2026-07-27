import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-download');
}

export default function HighrateTibiantisDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-download" />;
}
