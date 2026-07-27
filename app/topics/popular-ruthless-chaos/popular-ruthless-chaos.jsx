import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos');
}

export default function PopularRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos" />;
}
