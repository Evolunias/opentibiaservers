import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-low-exp-server');
}

export default function Tibiaretro81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-low-exp-server" />;
}
