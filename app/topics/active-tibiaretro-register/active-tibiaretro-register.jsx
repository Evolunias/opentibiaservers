import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-register');
}

export default function ActiveTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-register" />;
}
