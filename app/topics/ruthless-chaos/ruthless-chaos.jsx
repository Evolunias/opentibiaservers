import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos');
}

export default function RuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos" />;
}
