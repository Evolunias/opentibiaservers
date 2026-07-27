import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-private-server');
}

export default function LowrateRuthlessChaosPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-private-server" />;
}
