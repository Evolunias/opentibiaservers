import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-originaltibia-server');
}

export default function NonPvpOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-originaltibia-server" />;
}
