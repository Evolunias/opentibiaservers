import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-brazil');
}

export default function WithActivePlayersPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-brazil" />;
}
