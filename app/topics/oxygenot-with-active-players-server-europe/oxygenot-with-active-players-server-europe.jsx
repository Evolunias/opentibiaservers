import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-active-players-server-europe');
}

export default function OxygenotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-active-players-server-europe" />;
}
