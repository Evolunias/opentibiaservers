import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-chile-server');
}

export default function RuthlessChaosChileServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-chile-server" />;
}
