import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-france');
}

export default function EvoPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-france" />;
}
