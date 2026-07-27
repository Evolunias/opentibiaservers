import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('elera-players');
}

export default function EleraPlayersKeywordPage() {
  return <StaticKeywordPage slug="elera-players" />;
}
