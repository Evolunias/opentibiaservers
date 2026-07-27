import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-register');
}

export default function Tibia11WithActivePlayersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-register" />;
}
