import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-north-america');
}

export default function MediviaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-north-america" />;
}
