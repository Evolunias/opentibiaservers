import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-with-active-players-server');
}

export default function Shadowcores100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-with-active-players-server" />;
}
