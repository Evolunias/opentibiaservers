import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-download');
}

export default function NewSeasonArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-download" />;
}
