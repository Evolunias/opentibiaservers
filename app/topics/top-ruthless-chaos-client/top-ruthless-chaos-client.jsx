import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-client');
}

export default function TopRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-client" />;
}
