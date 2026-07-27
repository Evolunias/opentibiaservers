import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-ot-server');
}

export default function HighrateRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-ot-server" />;
}
