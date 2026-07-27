import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-12-with-active-players-server');
}

export default function Otmadness12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-12-with-active-players-server" />;
}
