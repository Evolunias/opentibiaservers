import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-active-players-register');
}

export default function Tibia1098WithActivePlayersRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-active-players-register" />;
}
