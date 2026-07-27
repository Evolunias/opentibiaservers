import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-guide');
}

export default function OfficialRuthlessChaosGuideKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-guide" />;
}
