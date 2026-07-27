import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-no-reset-server');
}

export default function Tibiaretro81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-no-reset-server" />;
}
