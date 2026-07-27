import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-uk');
}

export default function WithActivePlayersRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-uk" />;
}
