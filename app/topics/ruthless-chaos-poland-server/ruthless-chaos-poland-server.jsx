import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-poland-server');
}

export default function RuthlessChaosPolandServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-poland-server" />;
}
