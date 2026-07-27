import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-with-active-players-server');
}

export default function Neprenia15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-with-active-players-server" />;
}
