import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-ots');
}

export default function LowrateRuthlessChaosOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-ots" />;
}
