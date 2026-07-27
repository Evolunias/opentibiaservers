import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-mexico');
}

export default function WithActivePlayersClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-mexico" />;
}
