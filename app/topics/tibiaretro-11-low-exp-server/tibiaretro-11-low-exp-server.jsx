import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-low-exp-server');
}

export default function Tibiaretro11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-low-exp-server" />;
}
