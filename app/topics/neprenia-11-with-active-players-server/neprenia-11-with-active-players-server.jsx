import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-with-active-players-server');
}

export default function Neprenia11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-with-active-players-server" />;
}
