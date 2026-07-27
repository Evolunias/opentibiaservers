import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-with-active-players-server');
}

export default function Alastera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-with-active-players-server" />;
}
