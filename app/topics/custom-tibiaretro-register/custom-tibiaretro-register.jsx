import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-register');
}

export default function CustomTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-register" />;
}
