import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-tibiaretro-server');
}

export default function PvpeTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-tibiaretro-server" />;
}
