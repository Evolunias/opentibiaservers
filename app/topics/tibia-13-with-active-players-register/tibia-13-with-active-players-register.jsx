import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-register');
}

export default function Tibia13WithActivePlayersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-register" />;
}
