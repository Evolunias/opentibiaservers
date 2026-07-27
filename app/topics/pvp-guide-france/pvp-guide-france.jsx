import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-guide-france');
}

export default function PvpGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-guide-france" />;
}
