import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-usa');
}

export default function PvpEnforcedSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-usa" />;
}
