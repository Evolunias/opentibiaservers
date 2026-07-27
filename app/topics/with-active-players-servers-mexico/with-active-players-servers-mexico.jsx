import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-servers-mexico');
}

export default function WithActivePlayersServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-servers-mexico" />;
}
