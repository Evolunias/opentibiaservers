import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-with-active-players-server');
}

export default function Neprenia14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-with-active-players-server" />;
}
