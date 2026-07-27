import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-high-exp-server');
}

export default function Tibiaretro772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-high-exp-server" />;
}
