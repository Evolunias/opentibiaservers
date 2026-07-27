import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-with-active-players-server');
}

export default function Shadowcores84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-with-active-players-server" />;
}
