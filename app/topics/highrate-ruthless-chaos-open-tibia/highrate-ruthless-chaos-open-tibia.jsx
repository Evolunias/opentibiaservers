import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-open-tibia');
}

export default function HighrateRuthlessChaosOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-open-tibia" />;
}
