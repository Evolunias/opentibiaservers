import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-with-active-players-server');
}

export default function Shadowcores81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-with-active-players-server" />;
}
