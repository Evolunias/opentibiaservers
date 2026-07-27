import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-players');
}

export default function AmeraPlayersKeywordPage() {
  return <StaticKeywordPage slug="amera-players" />;
}
