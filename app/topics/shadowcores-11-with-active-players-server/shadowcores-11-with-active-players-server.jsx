import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-with-active-players-server');
}

export default function Shadowcores11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-with-active-players-server" />;
}
