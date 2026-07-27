import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-germany');
}

export default function PvpEnforcedSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-germany" />;
}
