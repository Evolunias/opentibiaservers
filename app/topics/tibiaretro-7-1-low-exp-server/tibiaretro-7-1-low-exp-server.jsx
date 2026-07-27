import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-low-exp-server');
}

export default function Tibiaretro71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-low-exp-server" />;
}
