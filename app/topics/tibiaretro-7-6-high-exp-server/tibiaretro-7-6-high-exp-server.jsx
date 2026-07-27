import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-high-exp-server');
}

export default function Tibiaretro76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-high-exp-server" />;
}
