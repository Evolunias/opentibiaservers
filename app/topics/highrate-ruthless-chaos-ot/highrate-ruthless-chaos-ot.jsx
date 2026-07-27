import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-ot');
}

export default function HighrateRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-ot" />;
}
