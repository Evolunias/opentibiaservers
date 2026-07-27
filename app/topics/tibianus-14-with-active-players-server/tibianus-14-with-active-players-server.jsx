import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-with-active-players-server');
}

export default function Tibianus14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-with-active-players-server" />;
}
