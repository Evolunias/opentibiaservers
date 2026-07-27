import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-germany');
}

export default function TibiaretroPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-germany" />;
}
