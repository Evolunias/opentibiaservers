import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-active-players-server-north-america');
}

export default function SerenityWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-active-players-server-north-america" />;
}
