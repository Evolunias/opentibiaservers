import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-with-active-players-server');
}

export default function Blazera86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-with-active-players-server" />;
}
