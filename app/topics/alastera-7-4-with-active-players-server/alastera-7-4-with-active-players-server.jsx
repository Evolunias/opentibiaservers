import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-with-active-players-server');
}

export default function Alastera74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-with-active-players-server" />;
}
