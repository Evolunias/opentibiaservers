import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-players');
}

export default function DoleraPlayersKeywordPage() {
  return <StaticKeywordPage slug="dolera-players" />;
}
