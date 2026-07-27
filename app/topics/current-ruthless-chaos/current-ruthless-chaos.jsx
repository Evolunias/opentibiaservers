import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos');
}

export default function CurrentRuthlessChaosKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos" />;
}
