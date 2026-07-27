import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ruthless-chaos-login');
}

export default function LowrateRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ruthless-chaos-login" />;
}
