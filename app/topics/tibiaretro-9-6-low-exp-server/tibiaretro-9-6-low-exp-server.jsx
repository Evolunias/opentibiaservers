import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-low-exp-server');
}

export default function Tibiaretro96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-low-exp-server" />;
}
