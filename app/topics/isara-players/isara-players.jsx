import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-players');
}

export default function IsaraPlayersKeywordPage() {
  return <StaticKeywordPage slug="isara-players" />;
}
