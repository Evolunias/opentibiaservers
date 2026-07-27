import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-register');
}

export default function Tibia76RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-register" />;
}
