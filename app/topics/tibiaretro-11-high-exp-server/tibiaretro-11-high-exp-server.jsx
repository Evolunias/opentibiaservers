import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-high-exp-server');
}

export default function Tibiaretro11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-high-exp-server" />;
}
