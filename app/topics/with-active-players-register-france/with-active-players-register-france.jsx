import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-register-france');
}

export default function WithActivePlayersRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-register-france" />;
}
