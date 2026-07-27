import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-with-players');
}

export default function OtservlistAlternativeWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-with-players" />;
}
