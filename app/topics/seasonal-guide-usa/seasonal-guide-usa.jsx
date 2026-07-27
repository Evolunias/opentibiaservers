import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-usa');
}

export default function SeasonalGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-usa" />;
}
