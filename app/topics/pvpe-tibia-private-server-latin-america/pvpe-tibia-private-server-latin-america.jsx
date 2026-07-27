import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibia-private-server-latin-america');
}

export default function PvpeTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibia-private-server-latin-america" />;
}
