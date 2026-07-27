import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ot-server-brazil');
}

export default function WithActivePlayersOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ot-server-brazil" />;
}
