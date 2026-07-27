import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-with-active-players-server');
}

export default function Tibianus100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-with-active-players-server" />;
}
