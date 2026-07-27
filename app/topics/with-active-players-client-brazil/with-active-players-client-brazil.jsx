import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-brazil');
}

export default function WithActivePlayersClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-brazil" />;
}
