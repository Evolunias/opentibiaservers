import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-no-reset-server');
}

export default function Tibiaretro100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-no-reset-server" />;
}
