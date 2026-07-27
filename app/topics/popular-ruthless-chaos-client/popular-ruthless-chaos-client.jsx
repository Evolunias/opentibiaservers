import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-client');
}

export default function PopularRuthlessChaosClientKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-client" />;
}
