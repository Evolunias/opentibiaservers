import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-evo-servers');
}

export default function Tibiaretro772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-evo-servers" />;
}
