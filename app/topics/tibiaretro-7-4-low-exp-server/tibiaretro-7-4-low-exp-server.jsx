import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-low-exp-server');
}

export default function Tibiaretro74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-low-exp-server" />;
}
