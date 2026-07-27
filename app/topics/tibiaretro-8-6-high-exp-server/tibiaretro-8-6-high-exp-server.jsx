import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-high-exp-server');
}

export default function Tibiaretro86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-high-exp-server" />;
}
