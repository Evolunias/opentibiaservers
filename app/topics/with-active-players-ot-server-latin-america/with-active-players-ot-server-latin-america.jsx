import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-latin-america');
}

export default function WithActivePlayersOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-latin-america" />;
}
