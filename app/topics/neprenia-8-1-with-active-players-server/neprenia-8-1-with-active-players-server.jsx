import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-with-active-players-server');
}

export default function Neprenia81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-with-active-players-server" />;
}
