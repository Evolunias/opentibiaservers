import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-season-mexico');
}

export default function PvpEnforcedSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-season-mexico" />;
}
