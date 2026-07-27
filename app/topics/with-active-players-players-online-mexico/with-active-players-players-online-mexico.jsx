import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-mexico');
}

export default function WithActivePlayersPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-mexico" />;
}
