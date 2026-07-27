import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-with-active-players-server');
}

export default function Tibianus84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-with-active-players-server" />;
}
