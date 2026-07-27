import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-originaltibia-server');
}

export default function PvpOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-originaltibia-server" />;
}
