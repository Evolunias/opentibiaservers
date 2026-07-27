import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-low-exp-server');
}

export default function Tibiaretro12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-low-exp-server" />;
}
