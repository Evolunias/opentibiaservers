import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-ot');
}

export default function LowrateRuthlessChaosOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-ot" />;
}
