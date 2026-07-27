import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-usa');
}

export default function TibiaretroNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-usa" />;
}
