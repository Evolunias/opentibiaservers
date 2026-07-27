import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-usa');
}

export default function PvpeTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-usa" />;
}
