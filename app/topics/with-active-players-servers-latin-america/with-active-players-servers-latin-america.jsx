import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-latin-america');
}

export default function WithActivePlayersServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-latin-america" />;
}
