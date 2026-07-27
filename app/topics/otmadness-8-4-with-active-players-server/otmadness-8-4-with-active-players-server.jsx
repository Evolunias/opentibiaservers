import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-8-4-with-active-players-server');
}

export default function Otmadness84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-8-4-with-active-players-server" />;
}
