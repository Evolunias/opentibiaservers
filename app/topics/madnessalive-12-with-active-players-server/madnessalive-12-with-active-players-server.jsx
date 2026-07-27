import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-with-active-players-server');
}

export default function Madnessalive12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-with-active-players-server" />;
}
