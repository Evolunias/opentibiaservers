import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-originaltibia-server');
}

export default function PvpEnforcedOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-originaltibia-server" />;
}
