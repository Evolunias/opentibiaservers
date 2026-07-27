import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-with-active-players-server');
}

export default function Neprenia71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-with-active-players-server" />;
}
