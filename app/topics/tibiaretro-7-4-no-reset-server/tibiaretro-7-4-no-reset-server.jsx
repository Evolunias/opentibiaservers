import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-no-reset-server');
}

export default function Tibiaretro74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-no-reset-server" />;
}
