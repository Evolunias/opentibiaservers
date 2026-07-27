import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-download');
}

export default function OfficialArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-download" />;
}
