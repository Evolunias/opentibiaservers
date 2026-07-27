import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-south-america');
}

export default function PvpeTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-south-america" />;
}
