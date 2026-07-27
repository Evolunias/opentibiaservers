import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-open-tibia');
}

export default function HighrateNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-open-tibia" />;
}
