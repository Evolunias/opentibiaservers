import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-client');
}

export default function CurrentRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-client" />;
}
