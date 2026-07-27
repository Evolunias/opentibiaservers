import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ruthless-chaos-ot-server');
}

export default function CurrentRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-ruthless-chaos-ot-server" />;
}
