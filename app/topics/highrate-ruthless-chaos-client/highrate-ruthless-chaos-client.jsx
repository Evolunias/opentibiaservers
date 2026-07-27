import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-client');
}

export default function HighrateRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-client" />;
}
