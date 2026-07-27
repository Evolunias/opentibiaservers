import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-tibia');
}

export default function HighrateNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-tibia" />;
}
