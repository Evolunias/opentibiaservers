import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-active-players-server-north-america');
}

export default function HarmoniaOtWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-active-players-server-north-america" />;
}
