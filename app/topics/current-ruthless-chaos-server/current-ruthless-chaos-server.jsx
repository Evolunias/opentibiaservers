import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-server');
}

export default function CurrentRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-server" />;
}
