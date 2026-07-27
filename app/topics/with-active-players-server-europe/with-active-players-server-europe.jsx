import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-europe');
}

export default function WithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-europe" />;
}
