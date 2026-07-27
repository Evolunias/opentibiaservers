import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-open-tibia');
}

export default function HighrateNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-open-tibia" />;
}
