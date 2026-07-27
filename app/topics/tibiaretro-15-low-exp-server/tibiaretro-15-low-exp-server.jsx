import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-low-exp-server');
}

export default function Tibiaretro15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-low-exp-server" />;
}
