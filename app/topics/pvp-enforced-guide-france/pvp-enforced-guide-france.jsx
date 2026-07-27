import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-guide-france');
}

export default function PvpEnforcedGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-guide-france" />;
}
