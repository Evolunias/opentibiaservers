import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-guide');
}

export default function FreshStartRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-guide" />;
}
