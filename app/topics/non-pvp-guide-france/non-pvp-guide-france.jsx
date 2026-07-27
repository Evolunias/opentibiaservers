import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-guide-france');
}

export default function NonPvpGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-guide-france" />;
}
