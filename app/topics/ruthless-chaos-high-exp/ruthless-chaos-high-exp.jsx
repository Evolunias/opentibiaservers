import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-high-exp');
}

export default function RuthlessChaosHighExpKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-high-exp" />;
}
