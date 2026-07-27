import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-register');
}

export default function NewTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-register" />;
}
