import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-france');
}

export default function SeasonalGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-france" />;
}
