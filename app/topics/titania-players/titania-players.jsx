import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('titania-players');
}

export default function TitaniaPlayersKeywordPage() {
  return <StaticKeywordPage slug="titania-players" />;
}
