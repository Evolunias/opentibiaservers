import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pacera-players');
}

export default function PaceraPlayersKeywordPage() {
  return <StaticKeywordPage slug="pacera-players" />;
}
