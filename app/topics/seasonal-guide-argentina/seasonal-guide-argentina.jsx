import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-guide-argentina');
}

export default function SeasonalGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-guide-argentina" />;
}
