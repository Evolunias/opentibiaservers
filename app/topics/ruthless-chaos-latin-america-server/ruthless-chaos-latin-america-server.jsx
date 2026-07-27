import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-latin-america-server');
}

export default function RuthlessChaosLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-latin-america-server" />;
}
