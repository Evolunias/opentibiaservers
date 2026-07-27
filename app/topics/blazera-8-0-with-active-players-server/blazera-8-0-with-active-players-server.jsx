import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-with-active-players-server');
}

export default function Blazera80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-with-active-players-server" />;
}
