import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-season');
}

export default function RuthlessChaosSeasonKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-season" />;
}
