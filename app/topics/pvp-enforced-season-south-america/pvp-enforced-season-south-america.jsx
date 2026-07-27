import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-south-america');
}

export default function PvpEnforcedSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-south-america" />;
}
