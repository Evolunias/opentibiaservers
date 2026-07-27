import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-tibia');
}

export default function HighrateYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-tibia" />;
}
