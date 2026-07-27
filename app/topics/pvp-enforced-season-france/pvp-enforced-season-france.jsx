import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-france');
}

export default function PvpEnforcedSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-france" />;
}
