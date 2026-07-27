import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-with-active-players-server-north-america');
}

export default function InfernalOtWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-with-active-players-server-north-america" />;
}
