import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-ots');
}

export default function HighrateRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-ots" />;
}
