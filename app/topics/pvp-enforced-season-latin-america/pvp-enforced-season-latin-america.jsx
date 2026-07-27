import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-latin-america');
}

export default function PvpEnforcedSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-latin-america" />;
}
