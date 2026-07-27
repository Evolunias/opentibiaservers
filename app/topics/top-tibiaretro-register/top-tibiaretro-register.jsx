import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-register');
}

export default function TopTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-register" />;
}
