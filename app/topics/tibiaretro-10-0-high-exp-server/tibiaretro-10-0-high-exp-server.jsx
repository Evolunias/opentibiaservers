import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-high-exp-server');
}

export default function Tibiaretro100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-high-exp-server" />;
}
