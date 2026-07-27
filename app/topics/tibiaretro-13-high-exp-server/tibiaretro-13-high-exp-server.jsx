import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-high-exp-server');
}

export default function Tibiaretro13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-high-exp-server" />;
}
