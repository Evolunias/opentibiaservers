import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-canada');
}

export default function PvpEnforcedSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-canada" />;
}
