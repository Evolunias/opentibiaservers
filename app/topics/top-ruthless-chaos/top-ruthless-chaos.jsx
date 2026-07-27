import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos');
}

export default function TopRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos" />;
}
