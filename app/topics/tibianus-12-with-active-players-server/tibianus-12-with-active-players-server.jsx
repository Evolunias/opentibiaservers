import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-with-active-players-server');
}

export default function Tibianus12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-with-active-players-server" />;
}
