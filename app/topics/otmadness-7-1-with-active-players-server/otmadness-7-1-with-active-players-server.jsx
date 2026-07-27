import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-1-with-active-players-server');
}

export default function Otmadness71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-1-with-active-players-server" />;
}
