import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-no-reset-server');
}

export default function Tibiaretro84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-no-reset-server" />;
}
