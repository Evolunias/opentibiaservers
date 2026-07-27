import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-with-active-players-server');
}

export default function Alastera11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-with-active-players-server" />;
}
