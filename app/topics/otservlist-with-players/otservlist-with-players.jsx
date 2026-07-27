import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-with-players');
}

export default function OtservlistWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="otservlist-with-players" />;
}
