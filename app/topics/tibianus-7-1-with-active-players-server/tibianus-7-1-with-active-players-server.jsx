import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-with-active-players-server');
}

export default function Tibianus71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-with-active-players-server" />;
}
