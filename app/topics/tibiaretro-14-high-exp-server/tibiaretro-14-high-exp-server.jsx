import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-high-exp-server');
}

export default function Tibiaretro14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-high-exp-server" />;
}
