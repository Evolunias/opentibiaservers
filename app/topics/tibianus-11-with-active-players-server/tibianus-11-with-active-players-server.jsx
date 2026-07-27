import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-with-active-players-server');
}

export default function Tibianus11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-with-active-players-server" />;
}
