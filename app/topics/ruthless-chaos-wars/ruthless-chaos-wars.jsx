import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-wars');
}

export default function RuthlessChaosWarsKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-wars" />;
}
