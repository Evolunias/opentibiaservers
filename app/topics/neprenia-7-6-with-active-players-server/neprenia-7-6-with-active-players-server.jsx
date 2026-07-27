import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-with-active-players-server');
}

export default function Neprenia76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-with-active-players-server" />;
}
