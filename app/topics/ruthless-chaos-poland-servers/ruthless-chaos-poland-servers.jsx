import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-poland-servers');
}

export default function RuthlessChaosPolandServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-poland-servers" />;
}
