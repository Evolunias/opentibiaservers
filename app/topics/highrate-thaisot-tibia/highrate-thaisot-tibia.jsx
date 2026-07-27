import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-tibia');
}

export default function HighrateThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-tibia" />;
}
