import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-server');
}

export default function PopularRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-server" />;
}
