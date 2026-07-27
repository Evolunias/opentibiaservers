import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-11-with-active-players-server');
}

export default function Otmadness11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-11-with-active-players-server" />;
}
