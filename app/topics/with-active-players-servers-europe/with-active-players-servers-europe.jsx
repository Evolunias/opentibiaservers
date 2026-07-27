import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-europe');
}

export default function WithActivePlayersServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-europe" />;
}
