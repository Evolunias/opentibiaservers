import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-tibia');
}

export default function HighrateCanobTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-tibia" />;
}
