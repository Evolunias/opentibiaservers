import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-pvp-enforced-server');
}

export default function Tibiaretro1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-pvp-enforced-server" />;
}
