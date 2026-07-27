import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-open-tibia');
}

export default function HighrateThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-open-tibia" />;
}
