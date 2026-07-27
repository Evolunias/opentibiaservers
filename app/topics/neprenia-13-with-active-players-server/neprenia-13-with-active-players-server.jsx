import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-with-active-players-server');
}

export default function Neprenia13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-with-active-players-server" />;
}
