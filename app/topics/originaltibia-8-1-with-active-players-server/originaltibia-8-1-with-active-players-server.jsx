import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-with-active-players-server');
}

export default function Originaltibia81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-with-active-players-server" />;
}
