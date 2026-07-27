import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-no-reset-server');
}

export default function Tibiaretro12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-no-reset-server" />;
}
