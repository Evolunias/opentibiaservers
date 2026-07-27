import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-register');
}

export default function Tibia74RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-register" />;
}
