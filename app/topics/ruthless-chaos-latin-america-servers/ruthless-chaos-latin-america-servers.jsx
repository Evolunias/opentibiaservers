import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-latin-america-servers');
}

export default function RuthlessChaosLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-latin-america-servers" />;
}
