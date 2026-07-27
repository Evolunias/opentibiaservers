import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-with-active-players-server');
}

export default function Alastera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-with-active-players-server" />;
}
