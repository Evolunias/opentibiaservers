import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-register');
}

export default function Tibia14RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-register" />;
}
