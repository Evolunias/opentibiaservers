import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibia-private-server-sweden');
}

export default function NonPvpTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibia-private-server-sweden" />;
}
