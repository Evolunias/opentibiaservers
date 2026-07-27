import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-germany');
}

export default function WithActivePlayersRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-germany" />;
}
