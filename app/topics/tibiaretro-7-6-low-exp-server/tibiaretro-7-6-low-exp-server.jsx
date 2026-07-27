import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-low-exp-server');
}

export default function Tibiaretro76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-low-exp-server" />;
}
