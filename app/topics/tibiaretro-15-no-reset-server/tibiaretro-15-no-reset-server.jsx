import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-no-reset-server');
}

export default function Tibiaretro15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-no-reset-server" />;
}
