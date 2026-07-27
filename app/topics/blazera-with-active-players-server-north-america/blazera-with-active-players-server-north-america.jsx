import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-active-players-server-north-america');
}

export default function BlazeraWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-active-players-server-north-america" />;
}
