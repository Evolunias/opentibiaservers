import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ruthless-chaos-server');
}

export default function NonPvpRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ruthless-chaos-server" />;
}
