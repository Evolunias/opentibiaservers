import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-with-active-players-server');
}

export default function Kasteria81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-with-active-players-server" />;
}
