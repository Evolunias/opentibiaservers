import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos');
}

export default function LowrateRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos" />;
}
