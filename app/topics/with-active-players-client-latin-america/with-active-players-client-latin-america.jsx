import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-latin-america');
}

export default function WithActivePlayersClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-latin-america" />;
}
