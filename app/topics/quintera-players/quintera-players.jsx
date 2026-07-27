import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-players');
}

export default function QuinteraPlayersKeywordPage() {
  return <StaticKeywordPage slug="quintera-players" />;
}
