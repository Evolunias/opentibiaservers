import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-ot-server');
}

export default function NoResetTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-ot-server" />;
}
