import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-download');
}

export default function HighrateArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-download" />;
}
