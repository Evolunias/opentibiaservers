import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-argentina');
}

export default function PvpeTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-argentina" />;
}
