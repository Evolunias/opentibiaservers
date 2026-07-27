import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-private-server');
}

export default function HighrateRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-private-server" />;
}
