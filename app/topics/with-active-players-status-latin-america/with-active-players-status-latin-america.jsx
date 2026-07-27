import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-latin-america');
}

export default function WithActivePlayersStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-latin-america" />;
}
