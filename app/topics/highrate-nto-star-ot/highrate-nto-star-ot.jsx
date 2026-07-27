import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-ot');
}

export default function HighrateNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-ot" />;
}
