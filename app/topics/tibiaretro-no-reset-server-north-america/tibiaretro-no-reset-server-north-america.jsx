import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-north-america');
}

export default function TibiaretroNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-north-america" />;
}
