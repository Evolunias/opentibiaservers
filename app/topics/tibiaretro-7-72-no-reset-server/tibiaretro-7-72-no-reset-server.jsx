import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-no-reset-server');
}

export default function Tibiaretro772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-no-reset-server" />;
}
