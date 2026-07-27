import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-argentina-servers');
}

export default function RuthlessChaosArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-argentina-servers" />;
}
