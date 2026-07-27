import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-active-players-server-north-america');
}

export default function LumineraWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-active-players-server-north-america" />;
}
