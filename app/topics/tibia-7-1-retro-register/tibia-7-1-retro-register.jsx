import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-register');
}

export default function Tibia71RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-register" />;
}
