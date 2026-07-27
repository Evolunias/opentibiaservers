import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-brazil');
}

export default function WithActivePlayersServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-brazil" />;
}
