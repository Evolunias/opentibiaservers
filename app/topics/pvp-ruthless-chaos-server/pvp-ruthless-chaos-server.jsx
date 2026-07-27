import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ruthless-chaos-server');
}

export default function PvpRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-ruthless-chaos-server" />;
}
