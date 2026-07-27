import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-register');
}

export default function CurrentTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-register" />;
}
