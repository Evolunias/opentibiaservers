import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-argentina-server');
}

export default function RuthlessChaosArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-argentina-server" />;
}
