import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-usa');
}

export default function WithActivePlayersOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-usa" />;
}
