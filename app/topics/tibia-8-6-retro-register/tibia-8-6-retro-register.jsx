import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-register');
}

export default function Tibia86RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-register" />;
}
