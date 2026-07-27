import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-10-0-with-active-players-server');
}

export default function Otmadness100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-10-0-with-active-players-server" />;
}
