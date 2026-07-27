import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-north-america');
}

export default function WithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-north-america" />;
}
