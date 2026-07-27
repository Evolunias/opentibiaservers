import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-open-tibia-server-sweden');
}

export default function PvpeOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-open-tibia-server-sweden" />;
}
