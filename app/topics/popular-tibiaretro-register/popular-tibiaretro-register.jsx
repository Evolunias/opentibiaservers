import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-register');
}

export default function PopularTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-register" />;
}
