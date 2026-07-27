import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-evo-servers');
}

export default function Tibiaretro14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-evo-servers" />;
}
