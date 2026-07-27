import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-mexico');
}

export default function TibiaretroNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-mexico" />;
}
