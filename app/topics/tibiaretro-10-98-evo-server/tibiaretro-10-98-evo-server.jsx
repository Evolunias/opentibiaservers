import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-evo-server');
}

export default function Tibiaretro1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-evo-server" />;
}
