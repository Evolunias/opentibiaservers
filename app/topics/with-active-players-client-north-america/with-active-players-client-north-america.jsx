import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-client-north-america');
}

export default function WithActivePlayersClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-client-north-america" />;
}
