import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-active-players-server-north-america');
}

export default function TibianusWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-active-players-server-north-america" />;
}
