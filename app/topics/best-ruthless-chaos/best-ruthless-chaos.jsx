import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos');
}

export default function BestRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos" />;
}
