import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-europe');
}

export default function WithActivePlayersOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-europe" />;
}
