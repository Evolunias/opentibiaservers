import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-register');
}

export default function HighrateTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-register" />;
}
