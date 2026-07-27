import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-uk');
}

export default function PvpEnforcedSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-uk" />;
}
