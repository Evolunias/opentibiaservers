import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-usa');
}

export default function WithActivePlayersRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-usa" />;
}
