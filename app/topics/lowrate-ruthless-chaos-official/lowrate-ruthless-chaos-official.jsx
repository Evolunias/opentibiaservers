import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-official');
}

export default function LowrateRuthlessChaosOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-official" />;
}
