import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-guide-brazil');
}

export default function WithActivePlayersGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-guide-brazil" />;
}
