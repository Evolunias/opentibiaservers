import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ruthless-chaos-server');
}

export default function EvoRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="evo-ruthless-chaos-server" />;
}
