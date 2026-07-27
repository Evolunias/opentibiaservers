import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-with-active-players-server');
}

export default function Alastera80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-with-active-players-server" />;
}
