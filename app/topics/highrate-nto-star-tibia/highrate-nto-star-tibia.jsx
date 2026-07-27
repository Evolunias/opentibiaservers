import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-tibia');
}

export default function HighrateNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-tibia" />;
}
