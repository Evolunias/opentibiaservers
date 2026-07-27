import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-server');
}

export default function ActiveRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-server" />;
}
