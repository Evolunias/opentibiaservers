import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-evo-servers');
}

export default function Tibiaretro1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-evo-servers" />;
}
