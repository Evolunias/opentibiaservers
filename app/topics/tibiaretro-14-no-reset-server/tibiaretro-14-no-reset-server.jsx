import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-no-reset-server');
}

export default function Tibiaretro14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-no-reset-server" />;
}
