import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fortera-players');
}

export default function ForteraPlayersKeywordPage() {
  return <StaticKeywordPage slug="fortera-players" />;
}
