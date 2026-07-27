import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-active-players-register');
}

export default function Tibia96WithActivePlayersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-active-players-register" />;
}
