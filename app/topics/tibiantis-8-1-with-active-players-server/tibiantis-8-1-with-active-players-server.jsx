import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-with-active-players-server');
}

export default function Tibiantis81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-with-active-players-server" />;
}
