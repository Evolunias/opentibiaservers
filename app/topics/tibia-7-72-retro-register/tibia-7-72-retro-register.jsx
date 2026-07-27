import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-register');
}

export default function Tibia772RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-register" />;
}
