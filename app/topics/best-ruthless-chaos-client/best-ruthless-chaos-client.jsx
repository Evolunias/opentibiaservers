import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-client');
}

export default function BestRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-client" />;
}
