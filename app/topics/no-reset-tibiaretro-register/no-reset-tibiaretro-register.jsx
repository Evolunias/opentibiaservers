import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-register');
}

export default function NoResetTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-register" />;
}
