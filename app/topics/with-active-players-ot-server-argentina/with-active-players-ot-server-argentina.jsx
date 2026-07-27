import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-argentina');
}

export default function WithActivePlayersOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-argentina" />;
}
