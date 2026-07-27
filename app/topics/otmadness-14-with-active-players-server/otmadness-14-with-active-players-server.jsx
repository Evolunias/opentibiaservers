import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-14-with-active-players-server');
}

export default function Otmadness14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-14-with-active-players-server" />;
}
