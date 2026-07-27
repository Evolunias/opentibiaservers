import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-germany');
}

export default function PvpeTibiaPrivateServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-germany" />;
}
