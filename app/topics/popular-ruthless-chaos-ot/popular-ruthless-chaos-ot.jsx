import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-ot');
}

export default function PopularRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-ot" />;
}
