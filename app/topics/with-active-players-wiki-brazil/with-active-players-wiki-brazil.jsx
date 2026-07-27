import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-wiki-brazil');
}

export default function WithActivePlayersWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-wiki-brazil" />;
}
