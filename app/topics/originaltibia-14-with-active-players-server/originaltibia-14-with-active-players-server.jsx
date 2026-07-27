import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-with-active-players-server');
}

export default function Originaltibia14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-with-active-players-server" />;
}
