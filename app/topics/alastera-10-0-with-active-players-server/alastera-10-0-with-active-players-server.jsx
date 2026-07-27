import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-with-active-players-server');
}

export default function Alastera100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-with-active-players-server" />;
}
