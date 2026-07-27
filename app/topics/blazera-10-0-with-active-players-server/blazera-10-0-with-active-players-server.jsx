import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-with-active-players-server');
}

export default function Blazera100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-with-active-players-server" />;
}
