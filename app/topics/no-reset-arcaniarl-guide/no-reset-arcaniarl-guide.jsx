import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-guide');
}

export default function NoResetArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-guide" />;
}
