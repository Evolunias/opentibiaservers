import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-with-active-players-server');
}

export default function Shadowcores14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-with-active-players-server" />;
}
