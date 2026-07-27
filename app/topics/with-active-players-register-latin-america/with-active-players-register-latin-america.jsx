import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-latin-america');
}

export default function WithActivePlayersRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-latin-america" />;
}
