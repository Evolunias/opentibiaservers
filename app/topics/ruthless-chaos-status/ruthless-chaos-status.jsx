import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-status');
}

export default function RuthlessChaosStatusKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-status" />;
}
