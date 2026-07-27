import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-guide');
}

export default function NewRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-guide" />;
}
