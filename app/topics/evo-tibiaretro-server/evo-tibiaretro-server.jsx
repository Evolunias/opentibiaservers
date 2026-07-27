import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiaretro-server');
}

export default function EvoTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiaretro-server" />;
}
