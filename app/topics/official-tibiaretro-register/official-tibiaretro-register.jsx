import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-register');
}

export default function OfficialTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-register" />;
}
