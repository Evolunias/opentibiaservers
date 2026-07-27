import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-north-america');
}

export default function AlasteraWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-north-america" />;
}
