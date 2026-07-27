import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibiaretro-server');
}

export default function NonPvpTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibiaretro-server" />;
}
