import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-open-tibia-server-sweden');
}

export default function PvpOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-open-tibia-server-sweden" />;
}
