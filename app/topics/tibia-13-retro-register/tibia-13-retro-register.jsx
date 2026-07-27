import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-register');
}

export default function Tibia13RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-register" />;
}
