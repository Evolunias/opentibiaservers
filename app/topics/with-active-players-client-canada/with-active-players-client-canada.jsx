import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-canada');
}

export default function WithActivePlayersClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-canada" />;
}
