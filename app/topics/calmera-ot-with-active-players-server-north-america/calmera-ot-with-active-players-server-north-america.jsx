import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-with-active-players-server-north-america');
}

export default function CalmeraOtWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-with-active-players-server-north-america" />;
}
