import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-with-active-players-server');
}

export default function Alastera14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-with-active-players-server" />;
}
