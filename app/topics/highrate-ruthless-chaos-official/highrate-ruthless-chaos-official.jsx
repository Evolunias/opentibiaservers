import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-official');
}

export default function HighrateRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-official" />;
}
