import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-usa-servers');
}

export default function RuthlessChaosUsaServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-usa-servers" />;
}
