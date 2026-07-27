import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-ot-server');
}

export default function PopularRuthlessChaosOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-ot-server" />;
}
