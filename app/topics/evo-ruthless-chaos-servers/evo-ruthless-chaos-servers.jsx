import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ruthless-chaos-servers');
}

export default function EvoRuthlessChaosServersKeywordPage() {
  return <StaticKeywordPage slug="evo-ruthless-chaos-servers" />;
}
