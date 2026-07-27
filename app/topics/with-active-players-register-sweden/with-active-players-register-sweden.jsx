import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-sweden');
}

export default function WithActivePlayersRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-sweden" />;
}
