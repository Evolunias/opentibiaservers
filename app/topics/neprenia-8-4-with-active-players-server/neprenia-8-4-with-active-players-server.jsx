import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-4-with-active-players-server');
}

export default function Neprenia84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-4-with-active-players-server" />;
}
