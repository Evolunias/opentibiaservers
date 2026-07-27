import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-open-tibia');
}

export default function HighrateRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-open-tibia" />;
}
