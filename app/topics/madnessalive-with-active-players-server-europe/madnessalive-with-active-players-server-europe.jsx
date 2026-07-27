import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-active-players-server-europe');
}

export default function MadnessaliveWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-active-players-server-europe" />;
}
