import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-with-active-players-server');
}

export default function Alastera15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-with-active-players-server" />;
}
