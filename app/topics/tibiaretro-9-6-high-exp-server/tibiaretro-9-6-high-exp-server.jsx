import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-high-exp-server');
}

export default function Tibiaretro96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-high-exp-server" />;
}
