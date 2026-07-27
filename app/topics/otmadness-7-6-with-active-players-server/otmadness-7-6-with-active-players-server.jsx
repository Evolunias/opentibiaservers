import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-7-6-with-active-players-server');
}

export default function Otmadness76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-7-6-with-active-players-server" />;
}
