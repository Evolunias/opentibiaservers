import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-canada');
}

export default function PvpeTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-canada" />;
}
