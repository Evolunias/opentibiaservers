import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-low-exp-server');
}

export default function Tibiaretro100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-low-exp-server" />;
}
