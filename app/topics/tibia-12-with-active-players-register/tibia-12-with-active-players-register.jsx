import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-register');
}

export default function Tibia12WithActivePlayersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-register" />;
}
