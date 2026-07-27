import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-europe');
}

export default function WithActivePlayersRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-europe" />;
}
