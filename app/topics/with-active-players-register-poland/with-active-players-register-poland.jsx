import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-poland');
}

export default function WithActivePlayersRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-poland" />;
}
