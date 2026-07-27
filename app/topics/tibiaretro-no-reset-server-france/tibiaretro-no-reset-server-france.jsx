import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-france');
}

export default function TibiaretroNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-france" />;
}
