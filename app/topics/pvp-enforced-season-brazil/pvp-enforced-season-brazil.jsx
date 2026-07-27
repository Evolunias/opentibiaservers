import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-brazil');
}

export default function PvpEnforcedSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-brazil" />;
}
