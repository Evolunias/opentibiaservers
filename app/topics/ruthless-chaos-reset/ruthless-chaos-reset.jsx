import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-reset');
}

export default function RuthlessChaosResetKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-reset" />;
}
