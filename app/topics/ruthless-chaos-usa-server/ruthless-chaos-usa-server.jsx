import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-usa-server');
}

export default function RuthlessChaosUsaServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-usa-server" />;
}
