import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-open-tibia');
}

export default function HighrateCanobOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-open-tibia" />;
}
