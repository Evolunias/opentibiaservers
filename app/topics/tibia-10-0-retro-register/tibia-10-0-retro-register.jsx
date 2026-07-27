import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-register');
}

export default function Tibia100RetroRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-register" />;
}
