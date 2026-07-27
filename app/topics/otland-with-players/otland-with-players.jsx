import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-with-players');
}

export default function OtlandWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="otland-with-players" />;
}
