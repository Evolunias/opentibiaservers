import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-with-active-players-server');
}

export default function Shadowcores71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-with-active-players-server" />;
}
