import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-north-america');
}

export default function PvpeTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-north-america" />;
}
