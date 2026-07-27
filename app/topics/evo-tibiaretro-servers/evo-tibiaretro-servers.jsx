import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiaretro-servers');
}

export default function EvoTibiaretroServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiaretro-servers" />;
}
