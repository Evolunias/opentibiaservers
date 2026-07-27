import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-players');
}

export default function NeranaPlayersKeywordPage() {
  return <StaticKeywordPage slug="nerana-players" />;
}
