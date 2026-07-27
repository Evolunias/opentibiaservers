import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star');
}

export default function HighrateNtoStarKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star" />;
}
