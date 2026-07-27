import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-register');
}

export default function Tibia11RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-register" />;
}
