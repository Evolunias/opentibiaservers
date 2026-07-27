import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-13-with-active-players-server');
}

export default function Otmadness13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-13-with-active-players-server" />;
}
