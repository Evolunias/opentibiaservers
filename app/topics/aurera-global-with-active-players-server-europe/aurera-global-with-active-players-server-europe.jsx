import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-europe');
}

export default function AureraGlobalWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-europe" />;
}
