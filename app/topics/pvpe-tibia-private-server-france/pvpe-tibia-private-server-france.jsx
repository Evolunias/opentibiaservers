import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-france');
}

export default function PvpeTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-france" />;
}
