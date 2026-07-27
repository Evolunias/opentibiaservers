import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ruthless-chaos-server');
}

export default function PvpEnforcedRuthlessChaosServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ruthless-chaos-server" />;
}
