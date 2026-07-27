import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-retro-register');
}

export default function Tibia854RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-retro-register" />;
}
