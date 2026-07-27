import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-argentina');
}

export default function PvpEnforcedSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-argentina" />;
}
