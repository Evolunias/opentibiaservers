import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-with-active-players-server');
}

export default function Alastera96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-with-active-players-server" />;
}
