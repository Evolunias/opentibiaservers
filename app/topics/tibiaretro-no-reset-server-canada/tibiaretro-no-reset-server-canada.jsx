import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-canada');
}

export default function TibiaretroNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-canada" />;
}
