import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-sweden');
}

export default function PvpeTibiaPrivateServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-sweden" />;
}
