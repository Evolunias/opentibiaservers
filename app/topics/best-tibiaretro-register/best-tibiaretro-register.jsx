import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-register');
}

export default function BestTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-register" />;
}
