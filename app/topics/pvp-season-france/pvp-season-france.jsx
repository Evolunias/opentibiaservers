import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-season-france');
}

export default function PvpSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-season-france" />;
}
