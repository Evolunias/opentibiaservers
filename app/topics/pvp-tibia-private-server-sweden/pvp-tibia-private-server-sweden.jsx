import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibia-private-server-sweden');
}

export default function PvpTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibia-private-server-sweden" />;
}
