import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-no-reset-server');
}

export default function Tibiaretro96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-no-reset-server" />;
}
