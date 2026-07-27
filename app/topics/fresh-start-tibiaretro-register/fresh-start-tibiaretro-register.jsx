import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-register');
}

export default function FreshStartTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-register" />;
}
