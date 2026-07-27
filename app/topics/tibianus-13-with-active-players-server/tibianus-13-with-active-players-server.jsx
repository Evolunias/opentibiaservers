import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-with-active-players-server');
}

export default function Tibianus13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-with-active-players-server" />;
}
