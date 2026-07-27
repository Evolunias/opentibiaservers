import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-north-america');
}

export default function PvpEnforcedSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-north-america" />;
}
