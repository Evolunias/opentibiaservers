import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-ot-server');
}

export default function TopRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-ot-server" />;
}
