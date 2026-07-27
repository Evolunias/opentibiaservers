import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-with-active-players-server');
}

export default function Neprenia100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-with-active-players-server" />;
}
