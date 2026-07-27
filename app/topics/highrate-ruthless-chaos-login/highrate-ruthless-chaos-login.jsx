import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ruthless-chaos-login');
}

export default function HighrateRuthlessChaosLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-ruthless-chaos-login" />;
}
