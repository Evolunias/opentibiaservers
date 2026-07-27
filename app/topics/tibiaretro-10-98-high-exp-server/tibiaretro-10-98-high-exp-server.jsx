import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-high-exp-server');
}

export default function Tibiaretro1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-high-exp-server" />;
}
