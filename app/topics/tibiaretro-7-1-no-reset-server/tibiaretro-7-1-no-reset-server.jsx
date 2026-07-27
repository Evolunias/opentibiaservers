import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-no-reset-server');
}

export default function Tibiaretro71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-no-reset-server" />;
}
