import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-ot-server');
}

export default function RuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-ot-server" />;
}
