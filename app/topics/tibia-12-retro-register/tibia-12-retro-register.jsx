import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-register');
}

export default function Tibia12RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-register" />;
}
