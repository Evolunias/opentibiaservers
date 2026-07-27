import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-open-tibia');
}

export default function HighrateOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-open-tibia" />;
}
