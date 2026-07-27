import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-poland');
}

export default function PvpEnforcedSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-poland" />;
}
