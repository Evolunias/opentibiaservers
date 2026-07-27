import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-with-active-players-server');
}

export default function Alastera71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-with-active-players-server" />;
}
