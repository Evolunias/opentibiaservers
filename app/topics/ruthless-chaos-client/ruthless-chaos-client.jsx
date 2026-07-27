import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-client');
}

export default function RuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-client" />;
}
