import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-with-active-players-server');
}

export default function Madnessalive15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-with-active-players-server" />;
}
