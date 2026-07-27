import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-mexico');
}

export default function PvpeTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-mexico" />;
}
