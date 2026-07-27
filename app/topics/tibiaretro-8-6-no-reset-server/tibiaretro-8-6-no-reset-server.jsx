import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-no-reset-server');
}

export default function Tibiaretro86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-no-reset-server" />;
}
