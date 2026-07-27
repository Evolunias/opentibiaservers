import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-mexico');
}

export default function SeasonalGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-mexico" />;
}
