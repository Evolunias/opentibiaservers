import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-open-tibia');
}

export default function HighrateYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-open-tibia" />;
}
