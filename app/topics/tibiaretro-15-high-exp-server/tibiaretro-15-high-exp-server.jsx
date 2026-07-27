import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-high-exp-server');
}

export default function Tibiaretro15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-high-exp-server" />;
}
