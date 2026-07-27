import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-poland');
}

export default function WithActivePlayersOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-poland" />;
}
