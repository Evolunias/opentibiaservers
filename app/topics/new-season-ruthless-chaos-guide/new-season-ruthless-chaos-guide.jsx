import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-guide');
}

export default function NewSeasonRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-guide" />;
}
